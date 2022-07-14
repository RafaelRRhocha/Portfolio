import { SignOut } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';

export function BackToHome() {
  return(
    <div>
      <Link to="/">
        <SignOut size={ 32 } />
      </Link>
    </div>
  )
}