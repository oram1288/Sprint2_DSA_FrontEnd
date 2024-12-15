import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const PreviousTrees = () => {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const response = await axios.get("http://localhost:8080/previousTrees");
        setTrees(response.data);
      } catch (error) {
        console.error("Error fetching trees:", error);
      }
    };
    fetchTrees();
  }, []);

  return (
    <div class="numberBox2">
      <h2>Previous Trees</h2>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id} class="treeItem">
            <strong>Input:</strong> {tree.inputNumbers}
            <br />
            <strong>Tree:</strong>{" "}
            <pre>{JSON.stringify(tree.root, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousTrees;
