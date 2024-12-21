import {NavLink} from "react-router-dom"
import incomeIcon from "./assets/income.svg"
import settingsIcon from "./assets/settings.svg"
import expensesIcon from "./assets/expenses.svg"
import smsIcon from "./assets/sms.svg"
import investmentIcon from "./assets/investment.svg"

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="menu-items-container">
                <NavLink to={"/"}>
                <div className="menu-item">
                    <div className="icon-container">
                            <img src={incomeIcon} alt="Income" />
                    </div>

                    <div className="menu-text-container">
                        <h1>Income</h1>
                        <p>Click to see how much income you've made</p>
                    </div>
                </div>
                </NavLink>

                <NavLink to={"expenses"}>
                <div className="menu-item">
                    <div className="icon-container">
                            <img src={expensesIcon} alt="expenses" />
                    </div>

                    <div className="menu-text-container">
                        <h1>Expenses</h1>
                        <p>Click to see how much you've spent</p>
                    </div>
                </div>
                </NavLink>

                <NavLink to={"sms"}>
                <div className="menu-item">
                    <div className="icon-container">
                            <img src={smsIcon} alt="sms" />
                    </div>

                    <div className="menu-text-container">
                        <h1>SMS alerts</h1>
                        <p>Click to see your financial SMS notifications</p>
                    </div>
                </div>
                </NavLink>

                <NavLink to={"investments"}>
                <div className="menu-item">
                    <div className="icon-container">
                            <img src={investmentIcon} alt="Investments" />
                    </div>

                    <div className="menu-text-container">
                        <h1>Investments</h1>
                        <p>Click to see how much you've invested</p>
                    </div>
                </div>
                </NavLink>

                <NavLink to={"settings"}>
                <div className="menu-item">
                    <div className="icon-container">
                            <img src={settingsIcon} alt="Settings" />
                    </div>

                    <div className="menu-text-container">
                        <h1>Settings</h1>
                        <p>Click to change your settings</p>
                    </div>
                </div>
                </NavLink>
            </div>
        </div>
    )
}