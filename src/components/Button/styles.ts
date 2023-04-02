import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const getBackgroundColorStyle = (color: string) => {
  switch (color) {
    case 'white':
      return css`
        background-color: #fff;
        border:1px solid #ddd;
        color: #184b66;
      `
    case 'gray':
      return css`
        background-color: #ddd;
        border:1px solid #ddd;
        color: #184b66;
      `
    case 'navy':
      return css`
        background-color: #184b66;
        border:1px solid #184b66;
        color: #fff;
      `
    default:
      return css`
        background-color: #fff;
        border:1px solid #ddd;
        color: #184b66;
      `
  }
}

export const styles = makeStyles({
  button: () => css`
    border: none;
    padding: 5px 20px;
    border-radius: 5px;
    font-size: 13px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `,
})
