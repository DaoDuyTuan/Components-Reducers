import React from 'react';


let increPerson = 0;
export default class CurriculumVitae extends React.Component {
    render() {
        const { dispatch, fullName, Age, DOB, workPlace, phoneNumber, email } = this.props;
        return (
            <div>
                {console.log("hhehe")}
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>Full name :</td>
                            <td>
                                <input type="text" name="fullName" ref={(input) => this.fullName = input } value={fullName} required/>
                                <div id="fullNameError"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>
                                <input type="radio" name="Gender" ref={(input) => this.gender = input} id="nam" required/> Male
                                <input type="radio" name="Gender" ref={(input) => this.gender = input} id="nu" required/> Female
                                <div id="GenderError"/>
                            </td>
                        </tr>

                        <tr>
                            <td>Age :</td>
                            <td>
                                <input type="text" name="Age" ref={(input) => this.Age = input} value={Age} required/>
                                <div id="AgeError"/>
                            </td>
                        </tr>

                        <tr>

                            <td>Date of birth :</td>
                            <td>
                                <input type="text" name="DOB" ref={(input) => this.DOB = input} value={DOB} placeholder="mm/dd/yyyy" required/>
                                <div id="DOBError"/>
                            </td>

                        </tr>

                        <tr>

                            <td>Work place :</td>
                            <td>
                                <input type="text" name="workPlace" ref={(input) => this.workPlace = input} value={workPlace} required/>
                                <div id="workPlaceError"/>
                            </td>

                        </tr>

                        <tr>

                            <td>Phone number:</td>
                            <td>
                                <input type="text" name="phoneNumber" ref={(input) => this.phoneNumber = input} value={phoneNumber}
                                       pattern=".{10,11}" required/>
                                <div id="phoneNumberError"/>
                            </td>

                        </tr>

                        <tr>

                            <td>Email :</td>
                            <td>
                                <input type="email" name="email" ref={(input) => this.email = input} placeholder="example@gmail.com" value={email} required/>
                                <div id="emailError"/>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    dispatch({
                                       type: 'ADD_PERSON',
                                       fullName: this.fullName.value,
                                       Age: this.Age.value,
                                       DOB: this.DOB.value,
                                       phoneNumber: this.phoneNumber.value,
                                       workPlace: this.workPlace.value,
                                       email: this.email.value,
                                       id: increPerson++
                                    });
                                    this.fullName.value = this.Age.value = this.DOB.value =
                                    this.phoneNumber.value = this.workPlace.value = this.email.value = '';
                                }}> submit </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

