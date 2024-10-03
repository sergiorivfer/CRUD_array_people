import PropTypes from "prop-types";
import { Person } from "./Person";
import { useState } from "react";
export const People = ({people, setPeople}) => {

    // estado para gestionar el ID de la persona que se esta editanto
    const [editingId, setEditingid] = useState(null);

    // estado para almecenar temporalmente datos de la persona que se esta editanto.
    const [editedPerson, setEditedPerson] = useState({
        name: '',
        role: '',
        img: ''
        
    });

    // metodo para gestionar los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPerson(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // metodo para crear un nuevo usuario 
    const handleCreate = (e) => {
        e.preventDefault();

        // Agregar un usuario al array
        setPeople([...people, {id: people.length + 1, ...editedPerson }]);

        //reiniciar los campos  del form
        setEditedPerson({name:'',role:'',img:''})
    };

  return (
    <div>
        <h2 className="text-center my-4">IT Team</h2>
        <div className="container">
            <div className="row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                    people.map((people) => {
                        return(
                            <div key= {people.id}>
                                <Person
                                    id={people.id}
                                    name={people.name}
                                    role={people.role}
                                    img={people.img}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
                {/* formulario */}
        <div className="container mt-4 row p-2">
            <h2 className="text-center ">Crear Nuevo empleado</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Nombres</label>
                    <input type="text" name='name' value={editedPerson.name} required className="form-control"  />
                </div>
            </form>

        </div>        
    </div>
  )
}

People.propTypes = {
    people: PropTypes.array,
    setPeople:PropTypes.func
}


