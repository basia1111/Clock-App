# React Clock Project - [Live demo](https://timezoneclock-app.vercel.app/)

This project is a clock application built with **React**, featuring both analog and digital clocks, dark/light mode support, and timezone adjustments. It uses **Vite** as the development environment and has been deployed on **Vercel**.

<img width="434" alt="Zrzut ekranu 2024-10-3 o 11 20 31" src="https://github.com/user-attachments/assets/30d13605-1589-4bb0-8b8f-51e01708b814">

## Features

**Analog Clock:** A functional analog clock that displays real-time hours, minutes, and seconds.
**Digital Clock:** Displays the current time in a digital format.
**Dark/Light Mode:** Toggle between light and dark themes with a mode switch.
**Time Zones:** Ability to select different time zones and display the current time accordingly.
**Timezone API Integration:** Fetches time zone data using the TimeZoneDB API.

## Project Structure

- **src/components**: Contains reusable components such as `AnalogClock`, `DigitalClock`, `DarkModeSwitch`, and more.
- **src/context**: Context providers like `ModeContext`, `LoadingContext`, and `TimeZoneOffsetContext`.
- **src/hooks**: Custom hooks like `useTime` for handling the time logic.
- 
## Technologies Used

- **React**: Frontend library
- **Vite**: Development environment
- **Tailwind CSS**: Styling framework
- **Vercel**: Deployment platform


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-clock.git
   ```

2. Navigate into the project directory:
   ```bash
   cd react-clock
   ```

3. Install dependencies using `npm` or `yarn`:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

5. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

## Vite Commands

- `npm run dev` or `yarn dev` – Start the development server
- `npm run build` or `yarn build` – Build the application for production
- `npm run preview` or `yarn preview` – Preview the production build


## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
