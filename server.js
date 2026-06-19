const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3000;

// JSON
app.use(express.json());

// sesiones
app.use(
    session({
        secret: "dariel-vip-super-secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 30
        }
    })
);

// archivos estáticos (IMPORTANTE)
app.use(express.static(path.join(__dirname, "public")));

// usuario demo
const USER = "dariel";
const PASS = "vip123";

// control intentos login
let intentos = 0;
let bloqueadoHasta = 0;

// 🔥 LOGIN PAGE
app.get("/", (req, res) => {
    if (req.session.auth) {
        return res.redirect("/dashboard");
    }

    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// 🔥 LOGIN LOGIC
app.post("/login", (req, res) => {
    const ahora = Date.now();

    if (ahora < bloqueadoHasta) {
        return res.json({
            ok: false,
            msg: "Demasiados intentos. Intenta más tarde."
        });
    }

    const { usuario, password } = req.body;

    if (usuario === USER && password === PASS) {
        req.session.auth = true;
        intentos = 0;
        return res.json({ ok: true });
    }

    intentos++;

    if (intentos >= 3) {
        bloqueadoHasta = Date.now() + 15000;
        intentos = 0;
    }

    return res.json({
        ok: false,
        msg: "Credenciales incorrectas"
    });
});

// 🔥 DASHBOARD PROTEGIDO
app.get("/dashboard", (req, res) => {
    if (!req.session.auth) {
        return res.redirect("/");
    }

    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 🔥 LOGOUT
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

// 🔥 START SERVER (RENDER FIX)
app.listen(PORT, () => {
    console.log("Servidor iniciado en puerto " + PORT);
});