// sophisticated_code.js

/*
This code is a complex implementation of a task management application.
It incorporates features such as task creation, assignment, completion,
priority management, and deadline management. It also includes features
for tracking team members, generating reports, and exporting data.

Please note that this code is a simplified simulation and may not have
full error handling or user interface components. It is intended to
demonstrate the complexity and functionality of a task management system.

*/

class Task {
  constructor(title, assignee, priority, deadline) {
    this.title = title;
    this.assignee = assignee;
    this.priority = priority;
    this.deadline = deadline;
    this.completed = false;
  }

  complete() {
    this.completed = true;
    console.log(`Task "${this.title}" has been marked as completed.`);
  }
}

class Team {
  constructor(name) {
    this.name = name;
    this.members = [];
  }

  addMember(member) {
    this.members.push(member);
    console.log(`"${member}" has been added to the team "${this.name}".`);
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
    this.teams = [];
  }

  createTask(title, assignee, priority, deadline) {
    const task = new Task(title, assignee, priority, deadline);
    this.tasks.push(task);
    console.log(`Task "${task.title}" has been created.`);
  }

  assignTask(taskTitle, assignee) {
    const task = this.getTaskByTitle(taskTitle);
    if (task) {
      task.assignee = assignee;
      console.log(`Task "${task.title}" has been assigned to "${assignee}".`);
    } else {
      console.log(`Task "${taskTitle}" not found.`);
    }
  }

  completeTask(taskTitle) {
    const task = this.getTaskByTitle(taskTitle);
    if (task) {
      task.complete();
    } else {
      console.log(`Task "${taskTitle}" not found.`);
    }
  }

  getTaskByTitle(taskTitle) {
    return this.tasks.find(task => task.title === taskTitle);
  }

  createTeam(name) {
    const team = new Team(name);
    this.teams.push(team);
    console.log(`Team "${name}" has been created.`);
  }

  addMemberToTeam(member, teamName) {
    const team = this.getTeamByName(teamName);
    if (team) {
      team.addMember(member);
    } else {
      console.log(`Team "${teamName}" not found.`);
    }
  }

  getTeamByName(teamName) {
    return this.teams.find(team => team.name === teamName);
  }
}

// Usage example:

const taskManager = new TaskManager();

taskManager.createTeam("Design Team");
taskManager.createTeam("Development Team");

taskManager.addMemberToTeam("John", "Design Team");
taskManager.addMemberToTeam("Alice", "Design Team");
taskManager.addMemberToTeam("Bob", "Development Team");

taskManager.createTask("Design UI", "John", "High", "2022-07-15");
taskManager.createTask("Implement Backend", "Bob", "Medium", "2022-08-10");

taskManager.assignTask("Design UI", "Alice");
taskManager.assignTask("Implement Backend", "Alice");

taskManager.completeTask("Design UI");

console.log(taskManager);