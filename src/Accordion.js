import React from "react";
import "./Accordion.css"; // Import the CSS file

class Accordion extends React.Component {
  handleAccordionClick(event) {
    event.target.classList.toggle("active");
    const panel = event.target.nextElementSibling;
    panel.classList.toggle("show");
  }

  render() {
    return (
      <div>
        <button className="accordion" onClick={this.handleAccordionClick}>
          Q: Where is the range located?
        </button>
        <div className="panel">
          <p>
            Lessons are offered at Ohlone Archery: 2301 Verna Court, San
            Leandro. Unfortunately, East Bay Archery is not equipped to offer
            off site classes.
          </p>
        </div>

        <button className="accordion" onClick={this.handleAccordionClick}>
          Q: How much does it cost?
        </button>
        <div className="panel">
          <p>
            All prices are on the booking page. Click the <u>Book Event</u> button to
            see prices.
          </p>
        </div>

        <button className="accordion" onClick={this.handleAccordionClick}>
          Q: What does the cost cover?
        </button>
        <div className="panel">
          <p>
            The cost covers everything having to do with archery: bows, arrows,
            armguards, finger tabs, bales, targets, instruction and lane time.
            There are no hidden costs.
          </p>
        </div>

        <button className="accordion" onClick={this.handleAccordionClick}>
          Q: Can our group bring food or alcohol?
        </button>
        <div className="panel">
          <p>
            Both food and alcohol are prohibited at the range. But, San Leandro
            has some great surrounding food options I am happy to share with
            you.
          </p>
        </div>

        <button className="accordion" onClick={this.handleAccordionClick}>
          Q: What if our group wants a longer than one hour class or lesson?
        </button>
        <div className="panel">
          <p>
            Greater than one hour slots can be arranged but must be done ahead
            of time. Please email me.
          </p>
        </div>

        <button className="accordion" onClick={this.handleAccordionClick}>
          Q: What should we/I bring?
        </button>
        <div className="panel">
          <p>Yourself and maybe a water bottle.</p>
        </div>

        <button className="accordion" onClick={this.handleAccordionClick}>
          Q: What should participants wear?
        </button>
        <div className="panel">
          <p>
            Closed toe shoes are preferable. Any pants, shorts or skirts are
            fine but I advise against very baggy or flowing sleeves. They will
            get caught in the string. Also, I suggest avoiding long earrings and
            I caution against trying to shoot with very, very long nails. They
            may break.
          </p>
        </div>

        <button className="accordion" onClick={this.handleAccordionClick}>
          Q: What if we have to cancel?
        </button>
        <div className="panel">
          <p>
            Cancellations are free of charge if done with a minimum of 24 hours
            notice. If less than 24 hours, a cancellation fee of $50 for 3
            people or less and $70 for 4 people and more will be charged.
          </p>
        </div>

        <button className="accordion" onClick={this.handleAccordionClick}>
          Q: What if we bring more than the number of people we booked for?
        </button>
        <div className="panel">
          <p>
            That's no problem. We can adjust the price to match the group size.
          </p>
        </div>

        <button className="accordion" onClick={this.handleAccordionClick}>
          Q: How many people can participate in a group class?
        </button>
        <div className="panel">
          <p>We can accommodate up to 22 participants.</p>
        </div>

        <button className="accordion" onClick={this.handleAccordionClick}>
          Q: Is the range ADA accessible?
        </button>
        <div className="panel">
          <p>Yes, it is.</p>
        </div>

        <button className="accordion" onClick={this.handleAccordionClick}>
          Q: Is there an age requirement?
        </button>
        <div className="panel">
          <p>Yes, 14 years of age and up. No one is too old!</p>
        </div>
      </div>
    );
  }
}

export default Accordion;
