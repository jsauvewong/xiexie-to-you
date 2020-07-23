import { sendSms } from './sendSms'
import schedule from 'node-schedule'
import { startServer } from './express'
import { setUpDatabase } from './postgreSQL'
import { codeGenerator } from './verificationCodeGenerator'
import { hashedCode } from './hash'

// So the app can talk to Heroku on their own assigned port
startServer()

const sendVerificationCode = () => {
  sendSms(hashedCode)
  console.log('sent')
}

// const execute = () => {
//   const randomPhrase = pickPhrase()
//   sendSms(randomPhrase)
//   console.log('sent')
// }

// console.log('started running')
// const timeout = setTimeout(execute, 1000);

/*const j = schedule.scheduleJob("0 9 * * *", function () {
  sendSms(pickPhrase())
  console.log("done!")
})*/

setUpDatabase()

sendVerificationCode()
