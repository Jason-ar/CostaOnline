import React from "react";
import { EmployeesCard } from "../../Components/Work/EmployeesCard";
//import { Card } from '../components/Card';  
import { EmployeesProfilesArray } from "../../Data/Work/EmployeesProfilesArray";
import { Link } from "react-router-dom";

const EmployeesContainer = () => {
    return (
        <div ClassName="container d-flex justify-content-center align-items-center h-100 border-0">
            <div className="container d-flex justify-content-center align-items-center h-100 border-0">
                <div className="row border-0">
                    {
                        EmployeesProfilesArray.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-12 g-1 border-0" key={card.id}>
                                <EmployeesCard name={card.name} profilePicture={card.profilePicture} phone={card.phone} age={card.age} birthdate={card.birthdate} days={card.days} hours={card.hours} skills={card.skills} aboutme={card.aboutme} experience={card.experience} link={card.link} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
};

export { EmployeesContainer };