import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='Foxnet Logo' />
          <h1>Welcome to the Foxnet</h1>
          <h2>NOTICE: Foxweb will experience downtime in the next week whilst a server migration takes place. No ETA can be given at this time,</h2>
        </div>
        <div className='App-body'>
          <ul className='c-system-status'>
            <li className='c-system-status--unstable' title='Status: Unstable'>Foxweb Network</li>
            <li className='c-system-status--up' title='Status: Up'>Plex</li>
            <li className='c-system-status--up' title='Status: Up'>Movie Downloader</li>
            <li className='c-system-status--down' title='Status: Down'>TV Show Downloader</li>
          </ul>
          <h2>What is this for?</h2>
          <p className='App-intro'>
            My network has a few things on it that I share with you lovely people but as I'm a) always tinkering and b) running on equipment that I cobbled together from spare parts. Things can go wrong. When they do you lot usually message me on FB and I'll either have to stop what I'm doing to fix the issue or I'll say I'll do it later and then forget.
          </p>
          <p className='App-intro'>So this is where Foxweb comes in. There are a list of links below that will let you do a few things. (the links will be self-explanitory). The main one I want you to look at is the 'support requests' link as that will allow you to raise issues that you find and I'll then have a list of things to take care of.</p>
          <p className='App-intro'>and yes... this does mean that I want you to stop messaging me on FB asking me to fix things immediately. However I'll try to make sure I fix any issues within a week. If you want more reliability than that, I'm afraid you'll have to build your own system yourselves</p>
          <h2>Useful Links</h2>
          <ul className='c-useful-links'>
            <li><a href='https://foxnet.lighthouseapp.com/projects/137358-foxweb-support/overview'>Raise a support request</a></li>
            <li><a href='//app.foxleigh.me:5050'>Add a Movie to the download queue</a></li>
            <li className='status-disabled'><a href='//app.foxleigh.me:8989'>Add a TV show to the download queue</a></li>
            <li className='status-disabled'><a href='//app.foxleigh.me:8080'>Check the download queue</a></li>
            <li><a href='//plex.tv/web'>Open Plex in your browser</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App
