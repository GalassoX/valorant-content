import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAgent } from 'src/app/models/Agent';
import { AgentsService } from 'src/app/service/agents.service';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit {

  agentName: string;
  agent: IAgent;
  error?: string;

  audioAgentVoice: HTMLAudioElement = new Audio();

  constructor(public route: ActivatedRoute, private agentService: AgentsService) {
    route.params.subscribe(params => {
      this.agentName = params['name'];
    });
  }

  async ngOnInit(): Promise<void> {
    const agent = await this.agentService.getAgentByName(this.agentName);
    if (agent) {
      this.agent = agent;
    } else {
      this.error = 'A internal server error was ocurred, try later';
    }
  }

  playVoice() {
    this.audioAgentVoice.pause();

    const audioSrc = this.agent.voiceLine.mediaList[0].wave;
    this.audioAgentVoice = new Audio(audioSrc);
    this.audioAgentVoice.play().catch(() => this.audioAgentVoice.muted = true);
  }
}
