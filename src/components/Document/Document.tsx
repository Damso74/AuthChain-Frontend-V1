import './Document.css'; // Assuming all CSS for these components are here
import DocumentHeader from './DocumentHeader';
import DocumentBody from './DocumentBody';
import DocumentFooter from './DocumentFooter';

const Document = () => {
    return (
        <div className="dynamic-content-loader">
            <DocumentHeader />
            <DocumentBody />
            <DocumentFooter />
        </div>
    );
};

export default Document;
