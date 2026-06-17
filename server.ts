import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for JSON parsing and URL encoded data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // In-memory data persistence
  const bookings: any[] = [
    {
      id: "booking-demo-1",
      fullName: "Алина Осмонова",
      phone: "+996 (707) 123-456",
      destination: "Анталья, Турция",
      date: "2026-06-25",
      durationDays: 10,
      guestsCount: 2,
      notes: "Хотели бы отель 5* рядом с песчаным пляжем, вылет утренний.",
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(), // 4 hours ago
      status: "confirmed"
    },
    {
      id: "booking-demo-2",
      fullName: "Кайратбек Сабиров",
      phone: "+996 (555) 789-012",
      destination: "Озеро Сон-Куль, Кыргызстан",
      date: "2026-07-02",
      durationDays: 4,
      guestsCount: 4,
      notes: "Групповой тур для семьи. Нужен англоязычный гид.",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(), // 1 day ago
      status: "pending"
    }
  ];

  const flights: any[] = [
    {
      id: "flight-demo-1",
      from: "Бишкек (FRU)",
      to: "Стамбул (IST)",
      departureDate: "2026-06-20",
      returnDate: "2026-06-30",
      passengerCount: 1,
      ticketClass: "business",
      tripType: "round",
      fullName: "Ильяс Асанов",
      phone: "+996 (777) 456-789",
      createdAt: new Date(Date.now() - 3600000 * 8).toISOString()
    }
  ];

  // API: Get all bookings
  app.get("/api/bookings", (req, res) => {
    res.json(bookings);
  });

  // API: Create new booking
  app.post("/api/bookings", (req, res) => {
    const { fullName, phone, destination, date, durationDays, guestsCount, notes } = req.body;

    if (!fullName || !phone || !destination || !date || !durationDays || !guestsCount) {
      return res.status(400).json({ error: "Пожалуйста, заполните все обязательные поля." });
    }

    const newBooking = {
      id: "booking-" + Math.random().toString(36).substr(2, 9),
      fullName,
      phone,
      destination,
      date,
      durationDays: Number(durationDays),
      guestsCount: Number(guestsCount),
      notes: notes || "",
      createdAt: new Date().toISOString(),
      status: "pending"
    };

    bookings.unshift(newBooking);

    // Output simulated notification message
    console.log(`[NOTIFY MANAGER] Новая заявка на Кербен Тревел!`);
    console.log(`📍 Направление: ${destination}`);
    console.log(`👤 Клиент: ${fullName} (${phone})`);
    console.log(`📅 Дата: ${date} ежедневно на ${durationDays} дней, ${guestsCount} чел.`);

    res.status(201).json({ success: true, booking: newBooking });
  });

  // API: Get all flight requests
  app.get("/api/flights", (req, res) => {
    res.json(flights);
  });

  // API: Create new flight request
  app.post("/api/flights", (req, res) => {
    const { from, to, departureDate, returnDate, passengerCount, ticketClass, tripType, fullName, phone } = req.body;

    if (!from || !to || !departureDate || !passengerCount || !fullName || !phone) {
      return res.status(400).json({ error: "Пожалуйста, заполните необходимые поля для авиабилета." });
    }

    const newFlight = {
      id: "flight-" + Math.random().toString(36).substr(2, 9),
      from,
      to,
      departureDate,
      returnDate: returnDate || "",
      passengerCount: Number(passengerCount),
      ticketClass: ticketClass || "economy",
      tripType: tripType || "round",
      fullName,
      phone,
      createdAt: new Date().toISOString()
    };

    flights.unshift(newFlight);

    console.log(`[NOTIFY MANAGER] Заявка на авиабилет!`);
    console.log(`✈️ Маршрут: ${from} -> ${to} (${tripType})`);
    console.log(`👤 Пассажир: ${fullName} (${phone}), Класс: ${ticketClass}`);

    res.status(201).json({ success: true, flight: newFlight });
  });

  // API: Update booking status (for Admin control)
  app.patch("/api/bookings/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const booking = bookings.find(b => b.id === id);
    if (!booking) {
      return res.status(404).json({ error: "Заявка не найдена." });
    }

    if (status && ["pending", "confirmed", "cancelled"].includes(status)) {
      booking.status = status;
      return res.json({ success: true, booking });
    }

    res.status(400).json({ error: "Недопустимый статус." });
  });

  // Serve static assets / Vite in dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
