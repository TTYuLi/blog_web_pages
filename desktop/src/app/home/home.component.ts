import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../assets/fonts/iconfont.css' ]
})
export class HomeComponent implements OnInit {
  _value = '';
  tabs = [
    {
      name   : '热门',
      content: 'Content of Tab Pane 1'
    },
    {
      name   : '推荐',
      content: 'Content of Tab Pane 2'
    },
    {
      name   : '热评',
      content: 'Content of Tab Pane 3'
    }
  ];
  tags = [
    {
      color: 'pink',
      keyword: 'html'
    },
    {
      color: 'red',
      keyword: 'css',
    },
    {
      color: 'orange',
      keyword: 'javascript'
    },
    {
      color: 'green',
      keyword: 'php'
    },
    {
      color: 'cyan',
      keyword: 'node'
    },
    {
      color: 'blue',
      keyword: 'pashion'
    },
    {
      color: 'purple',
      keyword: 'blog'
    },
    {
      color: '#2db7f5',
      keyword: 'emotion'
    },
    {
      color: '#108ee9',
      keyword: 'life'
    }
  ];
  array = [{}, {}, {}];
  onSearch(event: string): void {
    console.log(event);
  }
  public ngOnInit() {
    console.log('home component init!');
    this.tabs[ 0 ].content = 'Change Content';
  }
}
