"use client"
import React, { useState, useEffect } from 'react';
import { Camera, Lock, History, Shield, EyeOff, Eye, AlertTriangle } from 'lucide-react';

export default function VPNConsole() {
  const [cameraActive, setCameraActive] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [currentAction, setCurrentAction] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [hackerMode, setHackerMode] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  const browserHistory = [
    { time: '23:45', url: 'netflix.com/watch/81260280', title: 'How to Get Away with Murder - S6:E12' },
    { time: '23:12', url: 'google.com/search', title: 'Search: is it normal to have a crush on fictional characters' },
    { time: '22:58', url: 'google.com/search', title: 'Search: how to know if someone can see my browsing history' },
    { time: '22:45', url: 'netflix.com/watch/70264888', title: 'The Office - S5:E13' },
    { time: '22:30', url: 'google.com/search', title: 'Search: VPN actually secure reddit' },
    { time: '21:50', url: 'amazon.com/orders', title: 'Amazon Order History' },
    { time: '21:22', url: 'google.com/search', title: 'Search: can my boss see my internet history with VPN' },
    { time: '20:45', url: 'google.com/search', title: 'Search: embarrassing medical symptoms' },
  ];

  const appPasswords = [
    { app: 'Netflix', username: 'spanko.coolperson', password: 'netflix123!' },
    { app: 'Gmail', username: 'spanko.private@gmail.com', password: 'Summer2023!' },
    { app: 'Amazon', username: 'spankobuyer', password: 'Shop&&Buy22' },
    { app: 'Instagram', username: 'spanko_nowatching', password: 'Insta_Gram!' },
    { app: 'Banking App', username: 'spankomoney', password: 'Money$afe2023' },
    { app: 'Twitter', username: 'spanko_private', password: 'Tw1tterB1rd!' },
  ];

  useEffect(() => {
    // Simulate animation sequence
    if (animationPhase > 0) {
      const timer = setTimeout(() => {
        setAnimationPhase(animationPhase + 1);
        
        if (animationPhase === 1) {
          addNotification('VPN Connection Established', 'User believes they are anonymous');
        } else if (animationPhase === 3) {
          setHackerMode(true);
          addNotification('⚠️ Security Breach Detected', 'Remote access obtained');
        } else if (animationPhase === 4) {
          setShowHistory(true);
          addNotification('⚠️ Browser History Exposed', 'Retrieving user data');
        } else if (animationPhase === 5) {
          setShowPasswords(true);
          addNotification('⚠️ Passwords Compromised', 'Credentials extracted');
        } else if (animationPhase === 6) {
          setCameraActive(true);
          addNotification('⚠️ Camera Access Granted', 'Remote viewing enabled');
        }
      }, animationPhase === 1 ? 5000 : 4000);
      
      return () => clearTimeout(timer);
    }
  }, [animationPhase]);

  const addNotification = (title, message) => {
    const newNotification = {
      id: Date.now(),
      title,
      message,
      timestamp: new Date().toLocaleTimeString(),
    };
    
    setNotifications(prev => [newNotification, ...prev].slice(0, 5));
  };

  const toggleCamera = () => {
    setCameraActive(!cameraActive);
    setCurrentAction(cameraActive ? 'Camera deactivated' : 'Camera activated');
    addNotification(
      cameraActive ? 'Camera Deactivated' : 'Camera Activated',
      cameraActive ? 'Visual feed terminated' : 'Visual feed established'
    );
  };

  const togglePasswords = () => {
    setShowPasswords(!showPasswords);
    setCurrentAction(showPasswords ? 'Password view disabled' : 'Password view enabled');
    addNotification(
      showPasswords ? 'Passwords Hidden' : 'Passwords Exposed',
      showPasswords ? 'Credential viewing terminated' : 'Credentials now visible'
    );
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
    setCurrentAction(showHistory ? 'History view disabled' : 'History view enabled');
    addNotification(
      showHistory ? 'History Hidden' : 'History Exposed',
      showHistory ? 'Browsing data hidden' : 'Browsing data revealed'
    );
  };

  const startDemoSequence = () => {
    setAnimationPhase(1);
    addNotification('Demo Sequence Initiated', 'Preparing demonstration');
  };

  return (
    <div className={`min-h-screen font-mono ${hackerMode ? 'bg-black text-green-500' : 'bg-gray-900 text-blue-300'}`}>
      {/* Top Navigation */}
      <nav className="border-b border-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-6 w-6 mr-2" />
          <span className="text-lg font-bold">VPN Reality Check</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">
            IP: 192.168.1.{Math.floor(Math.random() * 255)}
          </span>
          <span className={`text-xs px-3 py-1 rounded-full ${hackerMode ? 'bg-red-900 text-red-300' : 'bg-green-900 text-green-300'}`}>
            {hackerMode ? 'COMPROMISED' : 'SECURE'}
          </span>
        </div>
      </nav>

      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column - Controls */}
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${hackerMode ? 'bg-gray-900 border border-green-900' : 'bg-gray-800'}`}>
            <h2 className="text-lg font-bold mb-4">Control Panel</h2>
            
            <div className="space-y-3">
              <button 
                onClick={toggleCamera} 
                className={`w-full p-3 rounded-md flex items-center justify-between ${cameraActive ? 'bg-red-900 text-red-100' : 'bg-gray-700'}`}
              >
                <div className="flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  <span>spanko's Front Camera</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${cameraActive ? 'bg-red-700' : 'bg-gray-600'}`}>
                  {cameraActive ? 'ACTIVE' : 'OFF'}
                </span>
              </button>
              
              <button 
                onClick={togglePasswords} 
                className={`w-full p-3 rounded-md flex items-center justify-between ${showPasswords ? 'bg-red-900 text-red-100' : 'bg-gray-700'}`}
              >
                <div className="flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  <span>spanko's App Passwords</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${showPasswords ? 'bg-red-700' : 'bg-gray-600'}`}>
                  {showPasswords ? 'VISIBLE' : 'HIDDEN'}
                </span>
              </button>
              
              <button 
                onClick={toggleHistory} 
                className={`w-full p-3 rounded-md flex items-center justify-between ${showHistory ? 'bg-red-900 text-red-100' : 'bg-gray-700'}`}
              >
                <div className="flex items-center">
                  <History className="h-5 w-5 mr-2" />
                  <span>spanko's Browser History</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${showHistory ? 'bg-red-700' : 'bg-gray-600'}`}>
                  {showHistory ? 'EXPOSED' : 'HIDDEN'}
                </span>
              </button>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${hackerMode ? 'bg-gray-900 border border-green-900' : 'bg-gray-800'}`}>
            <h2 className="text-lg font-bold mb-4">System Log</h2>
            <div className="space-y-2 h-64 overflow-y-auto">
              {notifications.map(notification => (
                <div key={notification.id} className={`p-2 rounded text-xs ${hackerMode ? 'bg-gray-800 border border-green-900' : 'bg-gray-700'}`}>
                  <div className="flex justify-between">
                    <span className={hackerMode ? 'text-red-400' : 'text-yellow-400'}>{notification.title}</span>
                    <span className="text-gray-400">{notification.timestamp}</span>
                  </div>
                  <p className="mt-1">{notification.message}</p>
                </div>
              ))}
              {notifications.length === 0 && (
                <div className="text-center text-gray-500 p-4">No activity logged yet</div>
              )}
            </div>
          </div>
          
          <button 
            onClick={startDemoSequence}
            disabled={animationPhase > 0}
            className={`w-full p-3 rounded-md font-bold ${
              animationPhase > 0 
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-700 hover:bg-blue-600 text-white'
            }`}
          >
            Run VPN Myth Demo
          </button>
        </div>
        
        {/* Middle Column - Main Content */}
        <div className="space-y-4 lg:col-span-2">
          {/* Camera View */}
          <div className={`p-4 rounded-lg ${hackerMode ? 'bg-gray-900 border border-green-900' : 'bg-gray-800'}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Camera Feed</h2>
              <div className={`flex items-center ${cameraActive ? 'text-red-500' : 'text-gray-500'}`}>
                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${cameraActive ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></span>
                {cameraActive ? 'LIVE' : 'OFFLINE'}
              </div>
            </div>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              {cameraActive ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0">
                    <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded">
                      spanko's Camera
                    </div>
                    <div className="absolute top-2 right-2 bg-red-600/80 text-white px-2 py-1 text-xs rounded flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-white mr-1 animate-pulse"></span>
                      REC
                    </div>
                  </div>
                  <video
                    className="w-full h-full object-cover"
                    src="/alex.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <EyeOff className="h-12 w-12 text-gray-700" />
                  <span className="absolute mt-16 text-gray-600">Camera Access Denied</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Password View */}
          <div className={`p-4 rounded-lg ${hackerMode ? 'bg-gray-900 border border-green-900' : 'bg-gray-800'}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Stored Passwords</h2>
              <div className={`flex items-center ${showPasswords ? 'text-red-500' : 'text-gray-500'}`}>
                <Lock className="h-4 w-4 mr-1" />
                {showPasswords ? 'EXPOSED' : 'SECURED'}
              </div>
            </div>
            {showPasswords ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="p-2 rounded-tl">Application</th>
                      <th className="p-2">Username</th>
                      <th className="p-2 rounded-tr">Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appPasswords.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}>
                        <td className="p-2">{item.app}</td>
                        <td className="p-2">{item.username}</td>
                        <td className="p-2 font-mono">{item.password}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="h-48 flex items-center justify-center">
                <div className="text-center">
                  <Eye className="h-12 w-12 mx-auto text-gray-700" />
                  <p className="mt-2 text-gray-600">Password access restricted</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Browser History */}
          <div className={`p-4 rounded-lg ${hackerMode ? 'bg-gray-900 border border-green-900' : 'bg-gray-800'}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Browsing History</h2>
              <div className={`flex items-center ${showHistory ? 'text-red-500' : 'text-gray-500'}`}>
                <History className="h-4 w-4 mr-1" />
                {showHistory ? 'MONITORING' : 'PRIVATE'}
              </div>
            </div>
            {showHistory ? (
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {browserHistory.map((item, index) => (
                  <div key={index} className="p-2 rounded bg-gray-700">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Today at {item.time}</span>
                    </div>
                    <div className="mt-1">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.url}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-48 flex items-center justify-center">
                <div className="text-center">
                  <EyeOff className="h-12 w-12 mx-auto text-gray-700" />
                  <p className="mt-2 text-gray-600">Browsing history is private</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 p-4 text-center text-xs text-gray-500 mt-8">
        <p>VPN Reality Check - Educational Demonstration</p>
        <p>This is a simulated interface demonstrating VPN security misconceptions</p>
      </footer>
      
      {/* VPN Myth Demo Overlay */}
      {animationPhase >= 1 && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-10">
          <div className="max-w-2xl w-full p-6 text-center">
            {animationPhase === 1 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Meet spanko.</h2>
                <p className="text-gray-300 text-lg">spanko thinks their VPN is a superpower. Hiding their IP, dodging the government, basically living like a spy from a bad movie.</p>
                <p className="text-gray-300 text-xl mt-4 italic">"No one can touch me now!"</p>
              </div>
            )}
            
            {animationPhase === 2 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">spanko feels invincible with their VPN...</h2>
                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                  <p className="text-gray-300 text-sm">IP Address: <span className="text-green-500">Hidden</span></p>
                  <p className="text-gray-300 text-sm">Location: <span className="text-green-500">Masked</span></p>
                  <p className="text-gray-300 text-sm">ISP Tracking: <span className="text-green-500">Blocked</span></p>
                </div>
                <p className="text-gray-300 text-lg">But there's a problem with this false sense of security...</p>
              </div>
            )}
            
            {animationPhase === 3 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-red-400 mb-4">Until BAM!</h2>
                <div className="bg-black p-4 rounded-lg mb-4 border border-red-900">
                  <p className="text-red-500 text-sm font-mono">
                    &gt; Initiating unauthorized access...
                  </p>
                  <p className="text-red-500 text-sm font-mono">
                    &gt; Bypassing VPN security...
                  </p>
                  <p className="text-red-500 text-sm font-mono">
                    &gt; Accessing endpoint directly...
                  </p>
                  <p className="text-red-500 text-sm font-mono">
                    &gt; Security breach successful.
                  </p>
                </div>
                <p className="text-gray-300 text-lg">A hacker's already got access to spanko's device.</p>
              </div>
            )}
            
            {animationPhase === 4 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-red-400 mb-4">Browsing history exposed!</h2>
                <div className="bg-black p-4 rounded-lg mb-4 border border-red-900 text-left">
                  <p className="text-red-500 text-sm font-mono">
                    &gt; Extracting recent activity...
                  </p>
                  <p className="text-green-500 text-sm font-mono">
                    netflix.com/watch/81260280 - "How to Get Away with Murder"
                  </p>
                  <p className="text-green-500 text-sm font-mono">
                    google.com/search - "is it normal to have a crush on fictional characters"
                  </p>
                  <p className="text-green-500 text-sm font-mono">
                    google.com/search - "embarrassing medical symptoms"
                  </p>
                </div>
                <p className="text-gray-300 text-lg">spanko's Netflix history and weird late-night Google searches are now visible.</p>
              </div>
            )}
            
            {animationPhase === 5 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-red-400 mb-4">Passwords compromised!</h2>
                <div className="bg-black p-4 rounded-lg mb-4 border border-red-900 text-left">
                  <p className="text-red-500 text-sm font-mono">
                    &gt; Extracting stored credentials...
                  </p>
                  <p className="text-green-500 text-sm font-mono">
                    Netflix: spanko.coolperson - netflix123!
                  </p>
                  <p className="text-green-500 text-sm font-mono">
                    Gmail: spanko.private@gmail.com - Summer2023!
                  </p>
                  <p className="text-green-500 text-sm font-mono">
                    Banking App: spankomoney - Money$afe2023
                  </p>
                </div>
                <p className="text-gray-300 text-lg">VPN doesn't protect your passwords!</p>
              </div>
            )}
            
            {animationPhase === 6 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-red-400 mb-4">Camera activated!</h2>
                <div className="bg-black p-4 rounded-lg mb-4 border border-red-900 text-left">
                  <p className="text-red-500 text-sm font-mono">
                    &gt; Accessing device camera...
                  </p>
                  <p className="text-green-500 text-sm font-mono">
                    Camera access granted, remote viewing enabled.
                  </p>
                </div>
                <p className="text-gray-300 text-lg">VPN doesn't protect against device compromises!</p>
              </div>
            )}
            
            {animationPhase === 7 && (
              <div className="animate-fadeIn space-y-4">
                <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto" />
                <h2 className="text-2xl font-bold text-yellow-400">Think your VPN makes you invincible?</h2>
                <h3 className="text-3xl font-bold text-yellow-500">Think again!</h3>
                <p className="text-gray-300 text-lg mt-4">
                  A VPN can hide your IP address, but it can't protect you from:
                </p>
                <ul className="text-left text-gray-300 space-y-2 max-w-md mx-auto">
                  <li>• Malware and endpoint attacks</li>
                  <li>• Phishing attempts</li>
                  <li>• Weak password practices</li>
                  <li>• Data breaches</li>
                  <li>• Social engineering</li>
                </ul>
                <p className="text-gray-300 text-lg mt-4">
                  VPNs are just one tool in a comprehensive security strategy!
                </p>
                <button onClick={() => setAnimationPhase(0)} className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                  Return to Console
                </button>
              </div>
            )}
            
            {animationPhase < 7 && (
              <button onClick={() => setAnimationPhase(animationPhase + 1)} className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
                Continue
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}