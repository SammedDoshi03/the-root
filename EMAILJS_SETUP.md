# EmailJS Setup Instructions

To make the Contact Form work, you need to configure EmailJS and update your `.env.local` file.

1.  **Create an EmailJS Account:**
    *   Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account.

2.  **Add a New Service:**
    *   In the EmailJS dashboard, go to the **Email Services** tab.
    *   Click **Add New Service** and select your email provider (e.g., Gmail).
    *   Connect your account and click **Create Service**.
    *   Copy the **Service ID** (e.g., `service_xyz123`).

3.  **Create an Email Template:**
    *   Go to the **Email Templates** tab.
    *   Click **Create New Template**.
    *   **Subject:** `New message from {{from_name}}`
    *   **Content:**
        ```html
        <p>You have a new message from your portfolio website:</p>
        <p><strong>Name:</strong> {{from_name}}</p>
        <p><strong>Email:</strong> {{from_email}}</p>
        <p><strong>Message:</strong></p>
        <p>{{message}}</p>
        ```
    *   **IMPORTANT:** Ensure the "To Email" field in the template settings (right sidebar) maps to your email address.
    *   Save the template.
    *   Copy the **Template ID** (e.g., `template_abc456`).

4.  **Get Your Public Key:**
    *   Go to the **Account** page (click your avatar in the top right).
    *   Copy the **Public Key** (e.g., `user_12345abcdef`).

5.  **Update Environment Variables:**
    *   Open the `.env.local` file in your project root.
    *   Replace the placeholders with your actual values:

    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

6.  **Restart the Server:**
    *   After changing `.env.local`, you must restart your local server (`npm run dev`) for changes to take effect.
