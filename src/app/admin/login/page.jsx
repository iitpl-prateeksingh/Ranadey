"use client";
import { useState } from "react";
import BASE_URL from "../../../services/BaseUrl";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.token) {
        localStorage.setItem("adminToken", result.token);
        localStorage.setItem(
          "adminUser",
          JSON.stringify(result.user || result.data),
        );
        router.push("/admin");
      } else {
        setError(result.message || "Login failed");
      }
    } catch (err) {
      setError(
        "Server connection failed. Please check if backend is running on port 8080.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* LEFT SIDE IMAGE */}
        <div
          className="col-md-6 d-none d-md-flex align-items-end text-white p-5"
          style={{
            backgroundImage: "url('/agri.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h1 className="fw-bold">
              Welcome to Institute for Micronutrient Technology
            </h1>
            <p className="lead">
              Empowering farmers with modern technology for sustainable
              agriculture and better yields.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE LOGIN */}
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
          <div
            className="card shadow-lg p-4"
            style={{ width: "100%", maxWidth: "400px", borderRadius: "15px" }}
          >
            <div className="text-center mb-4">
              <div className="mx-auto mb-3">
                <Image src="/img/logo.png" width={58} height={46} alt="" />
              </div>
              <h4 className="fw-semibold">Sign in to your account</h4>
              <p className="text-muted small">
                Enter your credentials to access your dashboard
              </p>
            </div>

            {error && <div className="alert alert-danger py-2">{error}</div>}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Sign In"}
              </button>
            </form>

            {/* <p className="text-center mt-3 small text-muted">
             {" Don't have an account?"}
              <span className="text-success" style={{ cursor: "pointer" }}>
                Sign up
              </span>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
