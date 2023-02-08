import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentInfoComponent } from './components/agents/agent-info/agent-info.component';
import { AgentsComponent } from './components/agents/agents.component';

const routes: Routes = [
  { path: "agents", component: AgentsComponent },
  { path: 'agents/:name', component: AgentInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
