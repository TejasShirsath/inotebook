import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea unde repellat esse, consequuntur dicta mollitia minima commodi facilis explicabo nihil perferendis aspernatur ipsa harum et, suscipit necessitatibus incidunt, dolorem numquam corrupti dolores neque.</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
