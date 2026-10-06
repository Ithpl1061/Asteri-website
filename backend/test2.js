require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

// prisma
const app = express();

// Middleware
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:8080';
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// Health Check Route

  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      database: 'disconnected', 
      error: error.message 
    });
  }
});

// ==========================================
// EXAMPLE ROUTES
// ==========================================

// Get all Services (Home Page)

    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// Get all Industries (Home Page)

    res.json(industries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch industries' });
  }
});

// Get all Team Members (About Page)

  }
});

// Get all Partners (Services Page)

    res.json(partners);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch partners' });
  }
});

// Get all Solution Outcomes (Solutions Page)

    res.json(outcomes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch outcomes' });
  }
});

// Get all Products

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get all Product Enablers

    res.json(enablers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product enablers' });
  }
});

// Get all Case Studies

    res.json(caseStudies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch case studies' });
  }
});

// Get all Partnership Principles

    res.json(principles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch principles' });
  }
});

// Get all Partner Ecosystem Details

    res.json(ecosystem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ecosystem' });
  }
});

// Get all Industry Details

    res.json(details);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch industry details' });
  }
});

// Add a Contact Message (Contact Page)
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMsg = await prisma.contactMessage.create({
      data: { name, email, message }
    });
    res.status(201).json({ success: true, data: newMsg });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact message' });
  }
});

// Get all Blog Posts (with category)

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

// Subscribe to newsletter
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;
  try {
    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email }
    });
    res.status(201).json(subscriber);
  } catch (error) {
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`\n🚀 Asteri Backend Server is running on http://localhost:${PORT}`);
  console.log(`👉 Test the health route at http://localhost:${PORT}/api/health\n`);
});


