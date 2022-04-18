# Task

Check out [Task.md](TASK.md)

# Instructions

## Run

1. `yarn`
2. `yarn --silent exercise`

## Test

1. `yarn test`

## Deploy the exercise as an API on AWS

1. Set up `aws-vault`
2. Synth and then bootstrap your environment: `aws-vault exec <profile> --no-session -- cdk synth; aws-vault exec <profile> --no-session -- cdk deploy` (you can remove no-session most likely - this was an issue on OSX)
3. Deploy: `aws-vault exec deanc --no-session -- cdk deploy`
4. Test:

```
curl --location --request POST 'https://<your-api-gateway>.amazonaws.com/prod/' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "points": [ [0, 0],
    [100, 100],
    [15, 10],
    [18, 18]],
    "stations": [
        {
            "coordinates": [0, 0],
            "reach": 10
        },
        {
            "coordinates": [20, 20],
            "reach": 5
        },
        {
            "coordinates": [10, 0],
            "reach": 12
        }
    ]
}'
```

# Notes

With a bit more time, I would add coverage for the lambda handler itself and pass in fake events,
to the handler to test it returns the right http response codes based off the input.
