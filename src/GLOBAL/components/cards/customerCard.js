// CustomerCard Component
import "../../styles/cardStyles/dashboard/customer-card.scss";
import DashboardGenericCard from "../../components/cards/dashboardGenericCard";
import { employeeCardPlaceholderImg } from "../../../utils/assets"; // Adjust the path as necessary
const CustomerCard = ({ customer, onCheckboxChange, onMenuClick }) => {
    const items = [
      { title: "customer-id", value: customer.customerID },
      { title: "customer-name", value: customer.name },
      { title: "customer-contact", value: customer.contact },
      { title: "customer-email", value: customer.email },
      { title: "gender", value: customer.gender },
      { title: "customer-address", value: customer.address }
    ];
  
    return (
      <DashboardGenericCard
        items={items}
        imageSrc={employeeCardPlaceholderImg}
        onCheckboxChange={onCheckboxChange}
        onMenuClick={onMenuClick}
        className="customer-card"
      />
    );
  };


export default CustomerCard;