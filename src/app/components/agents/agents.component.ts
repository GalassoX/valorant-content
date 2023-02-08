import { Component, OnInit } from '@angular/core';
import { IAgent } from '../../models/Agent';
import { AgentsService } from '../../service/agents.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  agents: IAgent[] = [];
  error: string = '';

  audioAgentVoice: HTMLAudioElement = new Audio();
  constructor(private agentService: AgentsService) { }

  ngOnInit(): void {
    this.agentService.getAgents().subscribe(data => {
      if (!data.body) return;
      if (data.status === 200) {
        this.error = '';
        this.agents = data.body.data;
      } else {
        this.error = data.body.error || 'A internal server error was ocurred, try later';
      }
    });
  }

  getBackgroundColor(agent: IAgent): Object {
    return `linear-gradient(#${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[2]})`;
  }

  playAgentVoice(agent: IAgent) {
    this.audioAgentVoice.pause();

    const audioSrc = agent.voiceLine.mediaList[0].wave;
    this.audioAgentVoice = new Audio(audioSrc);
    this.audioAgentVoice.play().catch(() => this.audioAgentVoice.muted = true);
  }
}
