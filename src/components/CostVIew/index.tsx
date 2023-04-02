import React from "react"
import { styles } from "./styles"

type Props = {
  year:string
  month:string
  day:string
  title:string
  unit:string
  title2:string
  unit2:string
}

export const CostCheck: React.FC<Props> = ({year, month, day, title, unit, title2, unit2}) => {
  return(
    <div css={styles.container}>
      <div css={styles.titleContainer}>
        <h3 css={styles.title}>{`${year}/${month}${day}  人件費`}</h3>
      </div>
      <div css={styles.main}>
        <p css={styles.mainTitle}>実人件費 : <span css={styles.mainCost}>238,520</span>円</p>
      </div>
      <div css={styles.sub}>
        <div css={styles.sub1}>
          <p>{title} : <span css={styles.subCost}>400,000</span>{unit}</p>
        </div>
        <div css={styles.sub2}>
          <p>{title2}  : <span css={styles.subCost}>59.6</span>{unit2}</p>
        </div>
      </div>
    </div>
  )
}
