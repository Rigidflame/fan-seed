app
    .constant('ref', 
        new Firebase('bucket.firebaseio.com/fan-seed/')
    )
    .constant('apiRef', 
        new Firebase('bucket.firebaseio.com/fan-seed/api')
    )
    .constant('apiMethods', 
        ["greeting"]
    )
    .constant('useSimpleLogin', 
        true
    )