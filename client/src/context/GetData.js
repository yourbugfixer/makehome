import { useState, useEffect, createContext, useContext } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../utils/Utility";

const GetData = createContext();

export const useData = () => useContext(GetData);

function GetdataProvider(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [team, setTeam] = useState([]);
  const [project, setProject] = useState([]);
  const [cateogry, setCateogry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const teamGlobal = await api.get("/team");
      const projectGlobal = await api.get("/projects");
      const cateogryGlobal = await api.get("/cateogry");

      setProject(projectGlobal.data.data);
      setCateogry(cateogryGlobal.data.data);
      setTeam(teamGlobal.data.data);
    };

    fetchData();
  }, []);

  const imports = {
    Swal,
    useForm,
    useState,
    useEffect,
    api,
    Link,
    yupResolver,
    isMobile,
  };

  return (
    <GetData.Provider
      value={{
        team,
        setTeam,
        project,
        setProject,
        cateogry,
        setCateogry,
        ...imports,
      }}
    >
      {props.children}
    </GetData.Provider>
  );
}

export default GetdataProvider;
