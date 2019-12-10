import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class SearchForm extends Component {
    // declare state for every single input field
    state = {
        name: "",
        message: "",
        timestamp: "",
        loadingStatus: false,
    };
    
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        //the below function updates the state with every key press:
        this.setState(stateToChange);
    };

    refreshPage() {
        window.location.reload(false);
    }

    constructNewMessage = evt => {
        //Retrieve UserId from localStorage and store in variable:
        const userId = localStorage.getItem("credentials")
        // Convert the Date.now() milliseconds to a readable date and time:
        const d = Date(Date.now());
        const dateTime = d.toString()

        evt.preventDefault();
        if (this.state.message === "") {
                window.alert("Please input a message")
            } else {
                //disable the button while the Post request is running:
                this.setState({ loadingStatus: true });
                const message = {
                    userId: Number(userId),
                    message: this.state.message,
                    timestamp: dateTime
                }

                ApiManager.post("messages", message)
                .then(() => {
                    this.props.updateMessages()
                    this.setState({ loadingStatus: false })
                });
                //^ reload Messages list after post request is done
            }
    };

    render(){
        return (
            <>
            <form>
                <fieldset>
                    <div>
                        <textarea
                            type="text"
                            required
                            rows="1"
                            cols="10"
                            onChange={this.handleFieldChange}
                            id="message"
                            placeholder="License #"
                        />
                    </div>
                    <div>
                    <fieldset>
                        <select>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </fieldset>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            disabled={this.state.loadingStatus}
                            onClick={this.constructNewMessage}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }
}

export default SearchForm