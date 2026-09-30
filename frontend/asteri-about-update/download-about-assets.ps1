$ErrorActionPreference = "Stop"

$root = Join-Path $PSScriptRoot "public\about"
New-Item -ItemType Directory -Force -Path $root | Out-Null

$assets = @{
  "hero-path.svg" = "https://www.figma.com/api/mcp/asset/cb1cf22e-8d50-4622-87e9-d3601490c52b.svg"
  "orb.svg" = "https://www.figma.com/api/mcp/asset/5cc73940-5671-4021-b443-b9005fb78474.svg"
  "cta-arrow.svg" = "https://www.figma.com/api/mcp/asset/c917933a-b93f-4101-817d-a9e14bb58870.svg"
  "mission-goal.png" = "https://www.figma.com/api/mcp/asset/d81dd48a-b699-47bb-924d-5cbfb4434b8b.png"
  "vision.png" = "https://www.figma.com/api/mcp/asset/06c73d6e-8d45-4abe-8099-aac427a88d44.png"
  "approach-discovery.png" = "https://www.figma.com/api/mcp/asset/3ad74184-7213-441e-98d9-35ab1df3db5a.png"
  "approach-team.png" = "https://www.figma.com/api/mcp/asset/98ef1459-83b4-49ea-90b3-f070be525ea4.png"
  "approach-agile.png" = "https://www.figma.com/api/mcp/asset/bbe81d17-cc55-4657-8839-d9db3dfae3ce.png"
  "approach-support.png" = "https://www.figma.com/api/mcp/asset/292682c3-2dee-4019-a258-6d236a721269.png"
  "visionary-avinash.png" = "https://www.figma.com/api/mcp/asset/0248bd67-eb09-426a-aa65-5c193099a69c.png"
  "visionary-circle.svg" = "https://www.figma.com/api/mcp/asset/a51d9b0c-cd32-4de8-a760-00856889129b.svg"
  "final-glow.svg" = "https://www.figma.com/api/mcp/asset/e87091e2-3bf5-4573-9d0b-929d0f18c3bf.svg"
}

foreach ($entry in $assets.GetEnumerator()) {
  $destination = Join-Path $root $entry.Key
  Write-Host "Downloading $($entry.Key)..."
  Invoke-WebRequest -Uri $entry.Value -OutFile $destination
}

Write-Host "All About page assets were downloaded to $root"
