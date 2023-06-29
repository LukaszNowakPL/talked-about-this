import React, { ReactElement } from "react";
import { createMemoryHistory } from "history";
import {
  Route,
  unstable_HistoryRouter as HistoryRouter,
  Routes,
} from "react-router-dom";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface RenderWithContextsRouterConfig {
  entries?: string[];
  path?: string;
}

interface RenderWithContextsConfig {
  router?: RenderWithContextsRouterConfig;
  reactQuery?: boolean;
}

export const renderWithContexts = (
  ui: ReactElement,
  config: RenderWithContextsConfig
) => {
  let history;
  let component = ui;

  if (config?.reactQuery) {
    component = wrapWithReactQuery(component);
  }

  if (config?.router) {
    const uiWithHistory = wrapWithRouter(component, config.router);
    component = uiWithHistory.component;
    history = uiWithHistory.history;
  }

  const renderResult = render(component);
  return { ...renderResult, history };
};

const wrapWithRouter = (
  ui: ReactElement,
  config: RenderWithContextsRouterConfig
) => {
  let component = ui;

  const { entries = [], path } = config;

  if (path) {
    component = <Route path={path} element={component} />;
  }

  const history = createMemoryHistory({ initialEntries: entries });
  component = (
    <HistoryRouter history={history as unknown as History}>
      <Routes>
        <Route path={"*"} element={<div />} />
        {component}
      </Routes>
    </HistoryRouter>
  );

  return { component, history };
};

const wrapWithReactQuery = (ui: ReactElement) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: 0,
      },
    },
  });
  client.clear();
  return <QueryClientProvider client={client}>{ui}</QueryClientProvider>;
};
