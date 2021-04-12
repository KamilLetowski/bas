import React, { createContext, useContext } from 'react';

class ContextBuilder {
  private _provider: React.FC | null = null;
  private _context: React.Context<any> | null = null;
  private stateFunc: () => unknown;

  constructor(stateFunc: () => unknown) {
    this.stateFunc = stateFunc;
  }

  get provider() {
    return this._provider as React.FC;
  }

  set provider(provider: React.FC) {
    this._provider = provider;
  }

  get context() {
    return this._context as React.Context<any>;
  }

  set context(context: React.Context<any>) {
    this._context = context;
  }

  setContext() {
    this.context = createContext<ReturnType<typeof this.useState> | undefined>(
      undefined
    );
  }

  setProvider() {
    if (this.context) {
      const Context = this.context;
      this.provider = ({ children }) => {
        const value = this.stateFunc();
        return <Context.Provider value={value}>{children}</Context.Provider>;
      };
    } else {
      throw Error('Cannot create provider without context');
    }
  }

  createHook() {
    const context = useContext(this.context);
    if (context === undefined) {
      throw new Error('Custom useState hook must be used within a Provider');
    }
    return context;
  }
}

export default ContextBuilder;
