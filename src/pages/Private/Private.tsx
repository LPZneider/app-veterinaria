"use client";
import React from "react";
import { Dashboard } from "./Dashboard";
import { PrivateRoutes } from "@/models";
import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "@/utilities";

export type PrivateProps = {
  // types...
};

const Private: React.FC<PrivateProps> = ({}) => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
    </RoutesWithNotFound>
  );
};

export default Private;
