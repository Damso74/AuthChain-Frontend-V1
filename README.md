# AuthChain Frontend

Welcome to the frontend repository of AuthChain, a blockchain-based authentication system. This project is designed to provide a secure and decentralized two-factor authentication mechanism that integrates seamlessly with any website, enhancing user privacy and security in Web3 applications.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js and npm](https://nodejs.org/en/download/) (npm comes with Node.js)

### Installation

To set up the development environment, follow these steps:

1. Clone the repository:
```sh
git clone https://github.com/Damso74/AuthChain-Frontend-V1.git
```

2. Navigate to the project directory:
```sh
cd AuthChain-Frontend-V1
```

3. Install the necessary dependencies using npm:
```sh
npm install vite
```

4. Start the development server:
```sh
npm start
```

After running the above command, the AuthChain site should be up and running on your local server. You can access it by going to `http://localhost:3000` in your web browser.

## Integration

AuthChain is designed as a standalone frontend application that can also function as a plug-and-play module for user database management. If you wish to integrate AuthChain into your existing website, please refer to our integration guide in the `docs` directory.

## Support

If you need help or have any questions, feel free to open an issue in the repository, and we'll be happy to assist you.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Project Overview

AuthChain is a decentralized application (dApp) that leverages blockchain technology to provide a robust and secure authentication system. Our design focuses on user privacy, employing a combination of smart contracts and off-chain computations to ensure user data integrity without compromising security.

### Design and Architecture

The dApp architecture comprises three main components:
1. **Smart Contracts**: Manage the authentication logic and user credentials securely on the Ethereum blockchain.
2. **Off-Chain Storage**: Uses decentralized storage solutions for sensitive data that shouldn't be on-chain, ensuring data privacy.
3. **Frontend Interface**: A user-friendly interface built with React, providing seamless interaction with the blockchain features.

### Prototype

A working prototype of the AuthChain dApp is available for review. The complete source code is hosted on GitHub, which you can access, fork, and review.

**Repository Link**: [AuthChain Frontend GitHub](https://github.com/Damso74/AuthChain-frontend-v1)

### Documentation

We've provided detailed documentation to help you set up, deploy, and use AuthChain. It covers every aspect of the dApp, from smart contracts to the frontend setup. The documentation for the API and SDK is currently under construction.

### Demo Video

Watch a brief demo video showcasing how AuthChain works and its various functionalities.

**Demo Video Link**: [AuthChain Demo](https://youtu.be/AxPpUXdIDy0)

