import { useState } from "react";
import BarChartComp from "../components/BarChartComp";
import Card from "../components/Card";
import PieChartComp from "../components/PieChartComp";
import "../styles/Home.css";
const data = [
  { name: "Group B", value: 12, title: "Open" },
  { name: "Group A", value: 23, title: "Overdue" },
  { name: "Group C", value: 65, title: "Paid" },
];
const data1 = [
  { name: "Group B", value: 10, title: "Ongoing" },
  { name: "Group A", value: 15, title: "Overdue" },
  { name: "Group C", value: 15, title: "Completed" },
  { name: "Group C", value: 60, title: "Open" },
];
const barData = [{ name: "Group B", uv: 8, amt: 20 }];
const barData2 = [{ name: "Group B", uv: 18, amt: 20 }];
const Home = () => {
  const [amount, setAmount] = useState(29310);
  const [overDue, setOverdue] = useState(3000);
  const res = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const due = overDue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className="backgroundHome universalCenter">
      <div>
        <div className="universalCenter ">
          <Card title="Amount payable">
            <div className="universalFlex">
              <img
                src="https://res.cloudinary.com/dydwwknyv/image/upload/v1625851606/Rectangle_67_qz7qnx_okl0mp.png"
                style={{ width: "100px", height: "auto" }}
              />
              <div style={{ lineHeight: "0" }}>
                <h4>Employer Name</h4>
                <button className="button_edit">Edit Profile</button>
              </div>
            </div>
            <div style={{ lineHeight: "20px" }}>
              <h3 style={{ fontWeight: "500" }}>Outstanding</h3>
              <h1 style={{ fontFamily: "'Poppins', sans-serif" }}>₹ {res}</h1>
            </div>
            <hr color="#dee3f3" />
            <div style={{ lineHeight: "20px" }}>
              <h3 style={{ fontWeight: "500" }}>Overdue</h3>
              <h1
                style={{
                  color: "#F93A3A",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                ₹ {due}
              </h1>
            </div>
          </Card>
          <Card title="Action Required">
            <BarChartComp
              data={barData2}
              fill="#6360AB"
              title="Gigs pending for approval"
              tickCount=""
              width={360}
            />
            <hr color="#dee3f3" style={{ marginTop: "-10px" }} />
            <BarChartComp
              data={barData}
              fill="#f7bd01"
              title="Dispute Raised"
              tickCount="1"
              width={360}
            />
          </Card>
          <Card title="Invoice status">
            <PieChartComp data={data} />
          </Card>
        </div>

        <div className="universalCenter">
          <div className="spreadCard uncheck gapCheck">
            <h3
              style={{
                textAlign: "left",
                marginTop: "30px",
              }}
            >
              Ongoing gigs
            </h3>
            <div>
              <BarChartComp
                fill="#f93a3a"
                title="Overdue milestone"
                data={barData}
                tickCount=""
                width={700}
              />
              <hr color="#dee3f3" style={{ marginTop: "-30px" }} />
              <BarChartComp
                data={barData2}
                fill="#6360AB"
                title="Upcoming milestone"
                tickCount="1"
                width={700}
              />
            </div>
          </div>
          <div className="check gapCheck">
            <Card title=" Ongoing gigs">
              <BarChartComp
                fill="#f93a3a"
                title="Overdue milestone"
                data={barData}
                tickCount=""
                width={360}
              />
              <hr color="#dee3f3" style={{ marginTop: "-10px" }} />
              <BarChartComp
                data={barData2}
                fill="#6360AB"
                title="Upcoming milestone"
                tickCount="1"
                width={360}
              />
            </Card>
          </div>

          <Card title="Gig status">
            <PieChartComp data={data1} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Home;
