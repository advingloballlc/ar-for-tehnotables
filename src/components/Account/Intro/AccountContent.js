import React from "react"

import AccountAccordion from './AccountAccordion'
import AccountInfo from './AccountInfo'

const AccountContent = ({ 
  tabName, 
  userInfo,
  personalInfoTitle,
  personalInfoFields,
  orderHistoryTitle,
  orderHistoryFields,
  emptyListTitle,
  orderList,
  validateErrors
}) => {
  return (
    <>
      <div className="account-intro-tabs__content">
        { tabName === "info" && <AccountInfo 
          userInfo={userInfo}
          personalInfoTitle={personalInfoTitle}
          personalInfoFields={personalInfoFields}
          validateErrors={validateErrors}
        /> }
        { tabName === "history" && <AccountAccordion
          orderHistoryTitle={orderHistoryTitle}
          orderHistoryFields={orderHistoryFields}
          emptyListTitle={emptyListTitle}
          orderList={orderList}
        /> }
      </div>
    </>
  )
}

export default AccountContent