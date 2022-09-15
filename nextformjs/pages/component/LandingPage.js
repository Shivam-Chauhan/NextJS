import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";

const LandingPage = () => {
  return (
    <>
      <div>
        <form className="ui form">
          <div className="field">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
          </div>
          <div class="field">
            <label>Text</label>
            <textarea></textarea>
          </div>
          <div class="field">
            <label>Short Text</label>
            <textarea rows="2"></textarea>
          </div>
          <Button primary>Submit</Button>
          {/* <Button primary className="ui button" type="submit" /> */}
          {/* Submit */}
        </form>
      </div>
    </>
  );
};

export default LandingPage;
