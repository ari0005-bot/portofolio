import React from 'react';

function AppSimple() {
  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '32px',
      fontFamily: 'Arial, sans-serif'
    }
  }, [
    React.createElement('h1', {
      key: 'title',
      style: {
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#2563eb',
        marginBottom: '16px',
        textAlign: 'center'
      }
    }, 'Portfolio Berhasil!'),
    React.createElement('p', {
      key: 'desc',
      style: {
        fontSize: '18px',
        color: '#374151',
        textAlign: 'center',
        marginBottom: '32px'
      }
    }, 'Portfolio elegan Anda sudah berjalan dengan baik!'),
    React.createElement('div', {
      key: 'card',
      style: {
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto'
      }
    }, [
      React.createElement('h2', {
        key: 'card-title',
        style: {
          fontSize: '24px',
          fontWeight: '600',
          marginBottom: '16px',
          color: '#1f2937'
        }
      }, '✨ Selamat Datang'),
      React.createElement('p', {
        key: 'card-desc',
        style: {
          fontSize: '16px',
          color: '#4b5563',
          lineHeight: '1.6'
        }
      }, 'Portfolio Anda telah berhasil dibuat dengan desain yang elegan dan modern. Semua komponen sudah siap digunakan!')
    ])
  ]);
}

export default AppSimple;
