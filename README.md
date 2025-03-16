# NailzByAngeles 

NailzByAngeles is a booking website I built to make scheduling appointments with me easy and stress-free. As a part-time nail technician, it was very time consuming to manage bookings on top of all my other responsibilities, so this website handles all of it and more. Most booking apps out there can be costly over time, so this also serves as a cost effective-alternative. Building this was the perfect way for me to sharpen my skills as a full-stack developer while solving a real problem I deal with every day!

## Tech Stack
* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js, MongoDB
* **Deployment:** Vercel (Frontend), Render (Backend)
  
## Features
* **Service Selection:** Clients can choose from a detailed list of nail services tailored to their preferences
* **Calendar Scheduling:** Interactive date and time selection for hassle-free booking
* **Payment Integration:** Uses Stripe API to collect a deposit to confirm appointment
* **Google Calendar Integration:** Automatically adds onfirmed appointments to personal Google Calendar
* **Client Information Storage:** Personal client information is securely stored using JWT
* **Redux State Management:** Maintains booking state across navigation for a smoother UX

## Project Setup
### 1. Clone the Repository
`git clone https://github.com/yourusername/nailzbyangeles.git
cd nailzbyangeles`

### 2. Install Dependencies
* **Frontend:** `npm install`
* **Backend:**  `cd backend`
               `npm install`

### 3. Set Up Environment Variables
#### Backend Configuration
Create a `.env` file inside the `backend` directory with the following variables:

```
PORT= 8000 (default)
MONGO_URI = your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
```

#### Frontend Configuration
Create a `.env` file inside the root directory with the following variables:

```
REACT_APP_API_BASE_URL=https://yourbackenddomain.com
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### 4. Running the Application
```
cd backend
npm run dev

cd frontend
npm start
```

## Future Enhancements
* Automated SMS/Email Reminders: Notify clients about upcoming appointments
* Client Login/Dashboard: Show past appointments and nail service preferences, offer discounts for repeat clients

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated.**

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact
Angeles de Alba - aid2121@columbia.edu
