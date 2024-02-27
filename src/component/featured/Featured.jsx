import React from "react";
import "./Featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

function Featured({type}) {

  return (
    <div className="featured">
        {type && (
            <div className="category">
               <span> {type==="movies"?"Movies":"Series"}</span>
                <select name="gener" id="gener">
                    <option>Gener</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
      <img
        src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/04/20/one-piece-zoro-in-wano-arc.jpeg"
        alt=""
      />
      <div className="info">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dg7x4cf-51e00b84-abdb-4482-ba3d-3298a4bf1705.png/v1/fill/w_1280,h_897/one_piece_live_action_logo_zoro_by_jormxdos_dg7x4cf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk3IiwicGF0aCI6IlwvZlwvZThkZGM0ZGEtMjNkZC00NTAyLWI2NWItMzc4YzljZmU1ZWZhXC9kZzd4NGNmLTUxZTAwYjg0LWFiZGItNDQ4Mi1iYTNkLTMyOThhNGJmMTcwNS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.jTr4Pom2mmhbwNPuXeZ6H_gZPi2UAEaQg9VYDHk0ub4"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          sunt quae eius facilis pariatur reiciendis velit architecto mollitia
          repellat id quia fugit, ut autem, provident beatae reprehenderit cum
          modi harum.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
