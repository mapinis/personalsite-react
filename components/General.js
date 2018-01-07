import React from "react";
import { Link } from "react-router";
import { BodyRenderer, createContainer, query } from "@phenomic/preset-react-app/lib/client";

const General = ({ isLoading, page }) => (
  <div className="content">
    { isLoading && "Loading..."}
    {!isLoading &&
      page.node && (
        <div>
          <h1>{page.node.title}</h1>
          <BodyRenderer>{page.node.body}</BodyRenderer>
        </div>
      )
    }
  </div>
);

const GeneralContainer = createContainer(General, props => ({
  page: query({ path: "", id: props.params.splat == "" ? "index" : props.params.splat })
}));

export default GeneralContainer;