# Deployment

```bash
# Build angular app
cd angular-app
ng build

# Login to aws 
aws configure

# Upload angular build to s3 samuelcastle.com bucket
aws s3 cp ./dist/ s3://samuelcastle.com/ --recursive
```
* Get AWS Access key and secret via [AWS Console - IAM ](https://console.aws.amazon.com/iam/home#/users/samuelcastle?section=security_credentials)*
* Angular app has its own dedicated user on aws.



