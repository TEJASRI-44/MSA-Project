package com.bharath.msa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
    if (!isTestEnvironment()) { // Skip .env loading in test environments
        // Gracefully handle missing .env file and load environment variables
        try {
            Dotenv dotenv = Dotenv.configure()
                .ignoreIfMissing() // Gracefully handle missing .env file
                .filename(".env") // The name of the .env file
                .load(); // Load the environment variables from the .env file
            
            // Set .env variables as system properties if available
            dotenv.entries().forEach(entry -> 
                System.setProperty(entry.getKey(), entry.getValue())
            );
        } catch (Exception e) {
            // If .env is missing, it will be ignored without causing an exception
            System.out.println("Warning: .env file not found or failed to load.");
        }
    }

    // Now, the application can use environment variables directly
    // Example: Using environment variables from Railway or .env
    String allowedOriginsEnv = System.getenv("ALLOWED_ORIGINS");  // For Railway
    if (allowedOriginsEnv == null) {
        // If no environment variable is set on Railway, fallback to default or .env value
        allowedOriginsEnv = System.getProperty("ALLOWED_ORIGINS"); // From .env or system properties
    }

    if (allowedOriginsEnv != null) {
        System.out.println("Allowed Origins: " + allowedOriginsEnv);
    }

    SpringApplication.run(DemoApplication.class, args);
}

private static boolean isTestEnvironment() {
    return System.getProperty("spring.test.context") != null;
}
	 @Bean
	    public WebMvcConfigurer corsConfigurer() {
	        // Fetch the allowed origins from the environment variable
	        String allowedOriginsEnv = System.getenv("ALLOWED_ORIGINS");
	        String[] allowedOrigins = allowedOriginsEnv != null ? allowedOriginsEnv.split(",") : new String[]{"http://localhost:3000"};

	        return new WebMvcConfigurer() {
	            @Override
	            public void addCorsMappings(CorsRegistry registry) {
	                registry.addMapping("/**") // Apply to all endpoints
	                        .allowedOrigins(allowedOrigins) // Allow origins from the .env file
	                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allow specific HTTP methods
	                        .allowedHeaders("*") // Allow all headers
	                        .allowCredentials(true); // Allow credentials (cookies, etc.)
	            }
	        };
	    }
	
   
}

