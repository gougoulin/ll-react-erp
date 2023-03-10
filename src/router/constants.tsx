export const login = {
  index: "/login",
  signin: "signup",
  passwordReset: "passwordreset",
  others: "*"
}

export const main = {
  index: "/",
  home: "/home",
  task: "/task",
  project: "/project",
  email: "/email",
  team: "/team",
  agenda: "/agenda",
  meeting: "/meeting",
  contact: "/contact",
  setting: "/setting",
  default: "/home"
}

export const navMenu: Record<string, string> = {
  home: main.home,
  task: main.task,
  project: main.project,
  email: main.email,
  team: main.team,
  agenda: main.agenda,
  meeting: main.meeting,
  contact: main.contact,
  setting: main.setting,
  default: main.home,
}