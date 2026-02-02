package com.clinic.phong_kham_backend.controller;

import com.clinic.phong_kham_backend.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");
        String role = request.get("role");

        // TODO: Implement actual authentication logic
        // For now, this is a placeholder that accepts any credentials
        
        // Generate JWT token
        String token = jwtUtil.generateToken(email, role.toUpperCase());

        // Create user object
        Map<String, Object> user = new HashMap<>();
        user.put("id", 1);
        user.put("name", role.equals("admin") ? "Admin User" : 
                  role.equals("receptionist") ? "Lễ tân" : "Bác sĩ");
        user.put("email", email);
        user.put("role", role);

        // Create response
        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("user", user);
        response.put("message", "Login successful");

        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody Map<String, String> request) {
        // TODO: Implement registration logic
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Registration endpoint - to be implemented");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    public ResponseEntity<Map<String, Object>> logout() {
        // TODO: Implement logout logic (token blacklisting, etc.)
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Logout successful");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/me")
    public ResponseEntity<Map<String, Object>> getCurrentUser(
            @RequestHeader(value = "Authorization", required = false) String authHeader) {
        // TODO: Extract user from JWT token
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Get current user - to be implemented");
        return ResponseEntity.ok(response);
    }
}
