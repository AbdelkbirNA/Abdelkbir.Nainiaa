import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div
    style={{
      backgroundColor: "#f6f9fc",
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
      padding: "20px",
    }}
  >
    <div
      style={{
        backgroundColor: "#ffffff",
        margin: "0 auto",
        padding: "20px",
        maxWidth: "600px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          color: "#333",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          borderBottom: "1px solid #eee",
          paddingBottom: "10px",
        }}
      >
        New Message from Portfolio
      </h1>
      <div style={{ marginBottom: "20px" }}>
        <p style={{ margin: "0 0 10px", color: "#666", fontSize: "14px" }}>
          <strong>From:</strong>
        </p>
        <p style={{ margin: "0", color: "#333", fontSize: "16px" }}>
          {fullName} <span style={{ color: "#888" }}>({email})</span>
        </p>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <p style={{ margin: "0 0 10px", color: "#666", fontSize: "14px" }}>
          <strong>Message:</strong>
        </p>
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "15px",
            borderRadius: "4px",
            borderLeft: "4px solid #0070f3",
            color: "#333",
            fontSize: "16px",
            lineHeight: "1.5",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </div>
      </div>
      <div
        style={{
          marginTop: "30px",
          borderTop: "1px solid #eee",
          paddingTop: "10px",
          color: "#888",
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        <p>This message was sent from your portfolio contact form.</p>
      </div>
    </div>
  </div>
);
