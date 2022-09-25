import React from 'react'
import styled from 'styled-components'

const SearchBoxWrapper = styled.div`
    background: linear-gradient(90.68deg, rgba(255, 255, 255, 0.5) -272.01%, rgba(255, 255, 255, 0) 134.1%);
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.05));
    backdrop-filter: blur(15px);
    border-radius: 15px;
    padding: 13px 26px 26px 26px;
    margin: 24px;
    box-sizing: border-box;
    border: 1px solid rgba(255,255,255,0.4);
    position: relative;
    z-index: 100;
`

export default function SearchBox({children}) {
  return (
    <SearchBoxWrapper>
        {children}
    </SearchBoxWrapper>
  )
}
