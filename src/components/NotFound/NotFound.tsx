import './NotFound.css'; // Make sure to also create NotFound.css to style this component

function NotFound() {
  return (
    <div className="NotFound">
      <h1>404 - Page Not Found</h1>
      <p>We're sorry, but the page you are looking for does not exist or has been moved.</p>
      <a href="/">Return to Home</a>
    </div>
  );
}

export default NotFound;
