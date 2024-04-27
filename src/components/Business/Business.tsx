import Introduction from './Introduction';
import WhyAuthChain from './WhyAuthChain';
import BusinessBenefits from './BusinessBenefits';
import UseCases from './UseCases';
import GetStarted from './GetStarted';
import IExecPresentation from './iExecPresentation';
import styles from './Business.module.css'; // Ensure the styles are imported correctly

const Business = () => {
    return (
        <div className={styles.businessPage}>  
            <Introduction />
            <IExecPresentation />
            <WhyAuthChain />
            <BusinessBenefits />
            <UseCases />
            <GetStarted />
        </div>
    );
};

export default Business;
