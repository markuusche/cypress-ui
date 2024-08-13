export default {
    login: 
    {
        'container':                      '.login-container',
        'user':                           'input[placeholder="Enter username"]',
        'password':                       'input[placeholder="Enter password"]',
        'submit':                         'button[type="submit"]',
        'failed':                         '.login-container .login-error h5'
    },

    home: 
    {
        'welcome':                        '.welcome-section h1',
        'logout':                         '.logout-btn'
    },

    profile: 
    {
        'icon':                           'a .user-pic img',
        'image':                          'main > div:first-child img',
        'toast-s':                        '.toast',
        'toast-msg':                      '.toast-body p',
        'toast-close':                    '.toast-header i',
        'prompt':                         'div.modal-inner',
        'yesbtn':                         'div.modal-inner .btn-success',

        general: 
        {                       
            'tab':                        '.tabContainer a:first-child',
            'container':                  '.page main > div:last-child',
            'fullname':                   '#full_name',
        },

        security: 
        {
            'tab':                        '.tabContainer a:nth-child(2)',
            'current-pass':               '#current_password',
            'new-pass':                   '#new_password',
            'confirm-pass':               '#confirm_password',
            'update-btn':                 '.btn-success',
            'error-msg':                  '.form-error span',
            'current-error':              '.mt-4 > div:first-child .form-error span',
            'new-error':                  '.mt-4 > div:nth-child(2) .form-error span',
            'confirm-error':              '.mt-4 > div:last-child .form-error span'

        },

        activity: 
        {
            'tab':                        '.tabContainer a:last-child',
            'table':                      '#tableBody',
            'entry':                      'select.outline-none',
            'preloader':                  '.preloader img',
            'rows':                       '#tableBody tr',
            'total':                      '.table-showing span:last-child'
        }

    },
    
    report: 
    {
        'report':                         '.nav-container:first-of-type span',
        'containter':                     '.nav-container:first-child',
        'betting-history':                '.nav-container:first-of-type a:first-child',
        'transfer-history':               '',
        'player-cashflow':                '',
        'promo-report':                   '',
        'game-report':                    '',
        'operator-summary':               '',
        'vendor-summary':                 '',
        'player-summary':                 '',
        'sports-betting':                 '',
        
        filter:
        {
            'search':                     'button[type="submit"]',
            'reset':                      'button[type="reset"]',
            'transaction-date':           '.form_inputs:first-of-type .dp__input_wrap input',
            'date-modal':                 'div.dp__menu',
            'today':                      'div.items-start:first-child .presetDatesLabel',
            'operator':                   'div.form_inputs:nth-child(2) input',
            'operator-dropdown':          'div.ant-select-dropdown',
            'operator-name':              'div.filter-node .ant-select-tree-title',
            'parent-operator':            '.ant-select-tree-treenode:nth-of-type(1) .anticon'
        }

    }

};