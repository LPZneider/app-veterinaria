"use client";
import React from "react";
import { Dashboard } from "./Dashboard";
import { PrivateRoutes } from "@/models";
import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "@/utilities";

const Private: React.FC = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
    </RoutesWithNotFound>
  );
};

export default Private;
