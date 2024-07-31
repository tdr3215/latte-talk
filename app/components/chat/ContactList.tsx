import React from "react";
interface ContactListProps {}

const ContactList = () => {
  return (
    <div className="w-3/12 bg-accent ">
      <div className="overflow-x-auto ">
          
            <table className="table table-pin-rows table-zebra text-cyan-50 ">
              <thead>
                <tr>
                  <th>A</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ant-Man</td>
                </tr>
                <tr>
                  <td>Aquaman</td>
                </tr>
                <tr>
                  <td>Asterix</td>
                </tr>
                <tr>
                  <td>The Atom</td>
                </tr>
                <tr>
                  <td>The Avengers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    
  );
};

export default ContactList;
