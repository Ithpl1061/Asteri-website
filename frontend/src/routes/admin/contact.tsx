import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { apiUrl } from "@/lib/api";

// Internal page to read contact messages. Not linked from the site and excluded from search engines.
// The admin token is typed in each time and kept only in memory, never in browser storage.
export const Route = createFileRoute("/admin/contact")({
  head: () => ({
    meta: [
      { title: "Contact messages — Asteri Admin" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminContactPage,
});

type ContactMessage = {
  id: number;
  name: string;
  email: string;
  message: string;
  status: string;
  submittedAt: string;
};

function AdminContactPage() {
  const [token, setToken] = useState("");
  const [messages, setMessages] = useState<ContactMessage[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function load(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(apiUrl("/api/admin/contact-messages"), {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) throw new Error("The admin token is wrong.");
      if (res.status === 503)
        throw new Error("Admin access is not configured on the server (ADMIN_TOKEN).");
      if (!res.ok) throw new Error(`Request failed (${res.status}).`);
      setMessages(await res.json());
    } catch (err) {
      setMessages(null);
      setError(err instanceof Error ? err.message : "Request failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white">
      <h1 className="text-2xl font-semibold">Contact messages</h1>

      <form onSubmit={load} className="mt-6 flex flex-wrap items-end gap-3">
        <label className="flex flex-col text-sm">
          Admin token
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            autoComplete="off"
            className="mt-1 rounded border border-white/40 bg-black px-3 py-2 text-white"
            required
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-white px-4 py-2 font-medium text-black disabled:opacity-50"
        >
          {loading ? "Loading…" : "Load messages"}
        </button>
      </form>

      {error && (
        <p role="alert" className="mt-4 text-red-300">
          {error}
        </p>
      )}

      {messages && messages.length === 0 && <p className="mt-6">No messages yet.</p>}

      {messages && messages.length > 0 && (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/40">
                <th className="py-2 pr-4">Received</th>
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Email</th>
                <th className="py-2 pr-4">Message</th>
                <th className="py-2 pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((m) => (
                <tr key={m.id} className="border-b border-white/10 align-top">
                  <td className="py-2 pr-4 whitespace-nowrap">
                    {new Date(m.submittedAt).toLocaleString()}
                  </td>
                  <td className="py-2 pr-4">{m.name}</td>
                  <td className="py-2 pr-4">
                    <a href={`mailto:${m.email}`} className="underline">
                      {m.email}
                    </a>
                  </td>
                  <td className="py-2 pr-4 whitespace-pre-wrap">{m.message}</td>
                  <td className="py-2 pr-4">{m.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
